
interface UnityInstance {
  SetFullscreen: (fullscreen: number) => void;
}

interface UnityConfig {
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
  streamingAssetsUrl: string;
  companyName: string;
  productName: string;
  productVersion: string;
  showBanner: (msg: string, type: string) => void;
  loaderUrl?: string;
}

interface Window {
  createUnityInstance: (
    canvas: HTMLCanvasElement, 
    config: UnityConfig, 
    progressCallback: (progress: number) => void
  ) => Promise<UnityInstance>;
}
