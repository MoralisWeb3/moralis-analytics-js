import { default as Axios, AxiosInstance } from 'axios';

export interface AnalyticsConfig {
  environment: 'production' | 'development';
}

export class Analytics {
  private axios: AxiosInstance;

  constructor(key: string, config?: AnalyticsConfig) {
    const baseURL =
      config?.environment === 'production'
        ? 'https://api.moralis.io'
        : 'http://127.0.0.1:3000';

    this.axios = Axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'moralis-live-key': key,
      },
    });
  }

  public address(address: string, metadata?: Record<string, any>) {
    return this.axios.post('/addresses', {
      address,
      metadata,
    });
  }
}
