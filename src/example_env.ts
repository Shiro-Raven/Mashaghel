// prod
export const environment = {
    mapsKey: 'AIzaSyCdpRX211Yu77Vwm0NNwjceaLdeLOurd8A',
    production: true,
    serverLink: 'http://192.168.99.100:3000/api/'
  };

// dev

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    mapsKey: 'AIzaSyCdpRX211Yu77Vwm0NNwjceaLdeLOurd8A',
    production: false,
    serverLink: 'http://localhost:3000/api/'
  };
