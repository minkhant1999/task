import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { EmployeeListComponent } from 'src/app/pages/employee-list/employee-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'employee',   component: EmployeeListComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'profile',           component: ProfileComponent }

];
