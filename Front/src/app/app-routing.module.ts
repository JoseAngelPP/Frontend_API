import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { CallbackComponent } from './shared/callback/callback.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '',
    component: PresentationComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'examples',
        loadChildren:
          './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboards',
        loadChildren: './pages/dashboards/dashboards.module#DashboardsModule'
      },
      {
        path: 'components',
        loadChildren: './pages/components/components.module#ComponentsModule'
      },
      {
        path: 'forms',
        loadChildren: './pages/forms/forms.module#FormsModules'
      },
      {
        path: 'tables',
        loadChildren: './pages/tables/tables.module#TablesModule'
      },
      {
        path: 'maps',
        loadChildren: './pages/maps/maps.module#MapsModule'
      },
      {
        path: 'widgets',
        loadChildren: './pages/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './pages/charts/charts.module#ChartsModule'
      },
      {
        path: 'calendar',
        loadChildren: './pages/calendar/calendar.module#CalendarModule'
      },
      {
        path: 'examples',
        loadChildren: './pages/examples/examples.module#ExamplesModule'
      }
    ]
  }
];
