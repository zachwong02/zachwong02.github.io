import { AstroError } from "astro/errors";

interface LetterPosition {
  x: number;
  y: number;
  letter: string;
}

interface LetterInstance extends LetterPosition {
  timestamp: number;
  fadeout: number;
}

class PageBackground {
  private LETTER_FADE_DURATION: [number, number] = [2, 7];
  private MAX_CANVAS_MULTIPLIER = 2;

  private baseCanvas: HTMLCanvasElement;
  private overlayCanvas: HTMLCanvasElement;
  private baseCtx: CanvasRenderingContext2D;
  private overlayCtx: CanvasRenderingContext2D;

  private width: number = window.innerWidth;
  private height: number = Math.min(
    Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight, document.body.scrollHeight),
    window.innerHeight * 2
  );

  private letterPositions: LetterPosition[] = [];
  private letterInstances: LetterInstance[] = [];
  private primaryRgb: string;

  constructor(baseCanvas: HTMLCanvasElement, overlayCanvas: HTMLCanvasElement) {
    const baseCtx = baseCanvas.getContext('2d');
    const overlayCtx = overlayCanvas.getContext('2d');

    if (!baseCtx || !overlayCtx) {
      throw new AstroError('Unable to get 2D context.');
    }

    this.baseCanvas = baseCanvas;
    this.overlayCanvas = overlayCanvas;
    this.baseCtx = baseCtx;
    this.overlayCtx = overlayCtx;

    this.primaryRgb = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-rgb').trim();

    this.resizeBackground();
    requestAnimationFrame(this.redrawBackground);
  }

  private initBackground = () => {
    let text: string = document.title.toLowerCase().split(' | ')[0].replace(/\s/g, '_') || 'spectre';
    if (text.includes("_")) text += "_";

    const letters = Math.ceil(this.width / 17);
    const lines = Math.ceil(this.height / 35);

    for (let i = 0; i < lines; i++) {
      for (let j = 0; j < letters; j++) {
        this.baseCtx.font = '28px Geist Mono';
        this.baseCtx.textAlign = 'start';
        this.baseCtx.textBaseline = 'top';
        this.baseCtx.fillStyle = 'rgba(255, 255, 255, 0.01)';
        this.baseCtx.fillText(text[j % text.length], j * 17, i * 35);

        this.letterPositions.push({
          x: j * 17,
          y: i * 35,
          letter: text[j % text.length]
        });
      }
    }

    const randomLetters = this.getRandomAmountFromArray<LetterPosition>(
      this.letterPositions,
      Math.floor(lines * 0.75)
    );

    for (const letter of randomLetters) {
      this.overlayCtx.font = 'bold 28px Geist Mono';
      this.overlayCtx.textAlign = 'start';
      this.overlayCtx.textBaseline = 'top';
      this.overlayCtx.fillStyle = `rgba(${this.primaryRgb}, 0)`;
      this.overlayCtx.shadowBlur = 16;
      this.overlayCtx.shadowColor = `rgba(${this.primaryRgb}, 0)`;
      this.overlayCtx.fillText(letter.letter, letter.x, letter.y);

      const animLength = this.LETTER_FADE_DURATION[0] + Math.random() * (this.LETTER_FADE_DURATION[1] - this.LETTER_FADE_DURATION[0]);
      this.letterInstances.push({
        ...letter,
        timestamp: Date.now(),
        fadeout: Date.now() + animLength * 1000
      });
    }

    this.baseCanvas.style.opacity = '1';
  }

  private easeInOutSine = (timestamp: number, start: number, end: number) => {
    const totalDuration = end - start;
    if (timestamp < start) return 0;
    if (timestamp > end) return 0;
    const progress = (timestamp - start) / totalDuration;
    return Math.max(0, 0.5 - 0.5 * Math.cos(progress * Math.PI));
  }

  private getRandomAmountFromArray = <T>(arr: Array<T>, n = 20): Array<T> => {
    let len = arr.length;
    const result = new Array(n);
    const taken = new Array(len);

    if (n > len) throw new AstroError("getRandomAmountFromArray: more elements taken than available");

    while (n--) {
      const x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }

    return result;
  }

  private redrawBackground = () => {
    const now = Date.now();
    this.overlayCtx.clearRect(0, 0, this.overlayCanvas.width, this.overlayCanvas.height);

    this.overlayCtx.font = 'bold 28px Geist Mono';
    this.overlayCtx.textAlign = 'start';
    this.overlayCtx.textBaseline = 'top';
    this.overlayCtx.shadowBlur = 16;

    const newInstances: LetterInstance[] = [];

    this.letterInstances = this.letterInstances.filter((letter) => {
      if (letter.fadeout > now) return true;

      const alpha = this.easeInOutSine(now, letter.timestamp, letter.fadeout);

      if (alpha <= 0 && now > letter.fadeout) {
        const [randomLetter] = this.getRandomAmountFromArray<LetterPosition>(this.letterPositions, 1);
        newInstances.push({
          ...randomLetter,
          timestamp: now,
          fadeout: now + (this.LETTER_FADE_DURATION[0] + Math.random() * (this.LETTER_FADE_DURATION[1] - this.LETTER_FADE_DURATION[0])) * 1000
        });
        return false;
      }

      this.overlayCtx.fillStyle = `rgba(${this.primaryRgb}, ${alpha})`;
      this.overlayCtx.shadowColor = `rgba(${this.primaryRgb}, ${alpha})`;
      this.overlayCtx.fillText(letter.letter, letter.x, letter.y);
      return true;
    });

    this.letterInstances.push(...newInstances);
    requestAnimationFrame(this.redrawBackground);
  }

  public resizeBackground = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    this.width = viewportWidth;
    this.height = Math.min(
      Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight, document.body.scrollHeight),
      this.MAX_CANVAS_MULTIPLIER * viewportHeight
    );

    this.baseCanvas.width = this.width;
    this.baseCanvas.height = this.height;
    this.overlayCanvas.width = this.width;
    this.overlayCanvas.height = this.height;

    this.baseCtx.clearRect(0, 0, this.baseCanvas.width, this.baseCanvas.height);
    this.overlayCtx.clearRect(0, 0, this.overlayCanvas.width, this.overlayCanvas.height);

    this.letterInstances = [];
    this.letterPositions = [];

    this.initBackground();
  }
}

async function loadFont() {
  const font = new FontFace('Geist Mono', 'url(/fonts/GeistMono.woff2)');
  await font.load();
  document.fonts.add(font);
}

async function initializeBackground() {
  await loadFont();

  const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
  const overlayCanvas = document.getElementById('overlay-canvas') as HTMLCanvasElement;

  const background = new PageBackground(canvas, overlayCanvas);

  let resizeTimeout: number;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(() => {
      background.resizeBackground();
    }, 200);
  });

  const observer = new ResizeObserver(() => {
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(() => {
      background.resizeBackground();
    }, 200);
  });

  observer.observe(document.body);
}

initializeBackground();
