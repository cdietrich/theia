import { ContainerModule } from "inversify";
import { LanguageClientContribution } from "@theia/languages/lib/browser";
import { MyDslClientContribution } from "./mydsl-client-contribution";

export default new ContainerModule(bind => {
    bind(MyDslClientContribution).toSelf().inSingletonScope();
    bind(LanguageClientContribution).toDynamicValue(ctx => ctx.container.get(MyDslClientContribution));
});
