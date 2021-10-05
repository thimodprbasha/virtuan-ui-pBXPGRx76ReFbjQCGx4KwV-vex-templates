import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VexRoutes} from '../@vex/interfaces/vex-route.interface';
import {CustomLayoutComponent} from './custom-layout/custom-layout.component';
import {AuthGuard} from './_helpers';


// const childrenRoutes: VexRoutes = [
//   {
//     path: 'apps/aio-table',
//     loadChildren: () => import('./pages/apps/aio-table/aio-table.module').then(m => m.AioTableModule),
//   }
// ];
const childrenRoutes: VexRoutes = [  {
    path: 'models/testpage1',
    loadChildren: () => import('./pages/Testpage1/testpage1.module').then(m => m.Testpage1Module),
  },
  {
    path: 'models/page4',
    loadChildren: () => import('./pages/Page4/page4.module').then(m => m.Page4Module),
  },
  {
    path: 'models/page2',
    loadChildren: () => import('./pages/Page2/page2.module').then(m => m.Page2Module),
  },
  {
    path: 'models/page3',
    loadChildren: () => import('./pages/Page3/page3.module').then(m => m.Page3Module),
  }];

  const routes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {
      path: '',
      component: CustomLayoutComponent,
      canActivate: [AuthGuard],
      children: childrenRoutes
    }
    
    
  ];

routes.push({path: '**', redirectTo: ''});

export const appRoutingModule = RouterModule.forRoot(routes);



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
