import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'fogo',
    loadChildren: () => import('./fogo/fogo.module').then( m => m.FogoPageModule)
  },
  {
    path: 'agua',
    loadChildren: () => import('./agua/agua.module').then( m => m.AguaPageModule)
  },
  {
    path: 'tela',
    loadChildren: () => import('./tela/tela.module').then( m => m.TelaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
