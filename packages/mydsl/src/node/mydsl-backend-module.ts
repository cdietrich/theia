import { ContainerModule } from "inversify";
import { LanguageServerContribution } from "@theia/languages/lib/node";
import { MyDslContribution } from './mydsl-contribution';

export default new ContainerModule(bind => {
    bind(LanguageServerContribution).to(MyDslContribution).inSingletonScope();
});