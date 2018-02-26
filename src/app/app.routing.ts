import { Routes, RouterModule } from "@angular/router";
import { InitialComponent } from "./initial/initial.component";
import { ModalTermsComponent } from "./modal-terms/modal-terms.component";
import { QuizComponent } from "./quiz/quiz.component";
import { SucessComponent } from "./sucess/sucess.component";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";


const appRoutes: Routes = [
    { path: "",component: InitialComponent},
    { path: "terms",component: ModalTermsComponent},
    { path: "quiz",component: QuizComponent},
    { path: "sucess",component: SucessComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);