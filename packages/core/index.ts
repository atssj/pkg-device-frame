// Device frame core types and utilities
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface DeviceConfig {
  type: DeviceType;
  name: string;
  width: number;
  height: number;
  aspectRatio: number;
  scale: number;
}

// Device dimension constants
export const DEVICE_CONFIGS: Record<DeviceType, DeviceConfig> = {
  mobile: {
    type: 'mobile',
    name: 'iPhone 14 Pro',
    width: 393,
    height: 852,
    aspectRatio: 393 / 852,
    scale: 1
  },
  tablet: {
    type: 'tablet', 
    name: 'iPad Pro',
    width: 1024,
    height: 1366,
    aspectRatio: 1024 / 1366,
    scale: 0.6
  },
  desktop: {
    type: 'desktop',
    name: 'MacBook Pro',
    width: 1512,
    height: 982,
    aspectRatio: 1512 / 982,
    scale: 0.4
  }
};

// Device frame CSS classes
export const DEVICE_FRAME_CLASSES = {
  container: 'device-frame-container',
  frame: 'device-frame',
  content: 'device-frame-content',
  mobile: 'device-frame-mobile',
  tablet: 'device-frame-tablet',
  desktop: 'device-frame-desktop',
  transition: 'device-frame-transition'
};

// Animation constants
export const ANIMATION_CONFIG = {
  duration: 300,
  easing: 'ease-in-out'
};

// Export CSS styles path
export const STYLES_PATH = './styles.css';
