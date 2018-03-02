import { Routes, RouterModule } from "@angular/router";
import { InitialComponent } from "./initial/initial.component";
import { QuizComponent } from "./quiz/quiz.component";
import { SuccessComponent } from "./success/success.component";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";


const appRoutes: Routes = [
    { path: "",component: InitialComponent},
    { path: "initial",component: InitialComponent},
    { path: "quiz",component: QuizComponent},
    { path: "success",component: SuccessComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);