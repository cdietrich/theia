import { injectable, inject } from "inversify";
import { BaseLanguageClientContribution, Workspace, Languages, LanguageClientFactory } from '@theia/languages/lib/browser';
import { MYDSL_LANGUAGE_ID, MYDSL_LANGUAGE_NAME } from '../common';

@injectable()
export class MyDslClientContribution extends BaseLanguageClientContribution {

    readonly id = MYDSL_LANGUAGE_ID;
    readonly name = MYDSL_LANGUAGE_NAME;

    constructor(
        @inject(Workspace) protected readonly workspace: Workspace,
        @inject(Languages) protected readonly languages: Languages,
        @inject(LanguageClientFactory) protected readonly languageClientFactory: LanguageClientFactory
    ) {
        super(workspace, languages, languageClientFactory);
    }

    protected get globPatterns() {
        return [
            '**/*.mydsl'
        ];
    }

}