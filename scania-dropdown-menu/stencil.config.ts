import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';


export const config: Config = {
  namespace: 'scania-dropdown-menu',
  outputTargets: [
    react({
      componentCorePackage: 'nathalielindqvist-dropdown-menu',
      proxiesFile: '../nathalielindqvist-react-proxy-dropdown/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
