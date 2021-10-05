import { mergeDeep } from '../utils/merge-deep';
import { ConfigName } from '../interfaces/config-name.model';
import { Config } from '../interfaces/config.model';

const defaultConfig: Config = {
  id: ConfigName.apollo,
  name: 'Apollo',
  imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
  layout: 'horizontal',
  boxed: false,
  sidenav: {
    title: 'vex-templates',
    imageUrl: 'assets/img/demo/logo.png',
    showCollapsePin: true,
    state: 'expanded'
  },
  toolbar: {
    fixed: true
  },
  navbar: {
    position: 'below-toolbar'
  },
  footer: {
    visible: false ,
    fixed: true
  }
};

export const configs: Config[] = [
  defaultConfig,
  mergeDeep({ ...defaultConfig }, {
    id: ConfigName.hermes,
    name: 'Hermes',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
    layout: 'vertical',
    boxed: true,
    toolbar: {
      fixed: true
    },
    footer: {
      visible: false ,
      fixed: true
    }
  }),
  mergeDeep({ ...defaultConfig }, {
    id: ConfigName.ares,
    name: 'Ares',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ares.png',
    toolbar: {
      fixed: true
    },
    navbar: {
      position: 'in-toolbar'
    },
    footer: {
      visible: false ,
      fixed: true
    }
  }),
  mergeDeep({ ...defaultConfig }, {
    id: ConfigName.zeus,
    name: 'Zeus',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
    toolbar: {
      fixed: true
    },
    sidenav: {
      state: 'collapsed'
    },
    footer: {
      visible: false ,
      fixed: true
    }
  }),
  mergeDeep({ ...defaultConfig }, {
    id: ConfigName.ikaros,
    name: 'Ikaros',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
    layout: 'vertical',
    boxed: true,
    toolbar: {
      fixed: true
    },
    navbar: {
      position: 'in-toolbar'
    },
    footer: {
      visible: false ,
      fixed: true
    }
  })
];
