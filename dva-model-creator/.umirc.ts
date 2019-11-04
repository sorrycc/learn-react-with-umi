import { IConfig } from 'umi-types';

export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: true,
      },
    ],
    'umi-plugin-autolayout',
  ],
} as IConfig;
