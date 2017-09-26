import { injectable } from "inversify";
import { BaseLanguageServerContribution, IConnection } from "@theia/languages/lib/node";
import { MYDSL_LANGUAGE_ID, MYDSL_LANGUAGE_NAME } from '../common';

@injectable()
export class MyDslContribution extends BaseLanguageServerContribution {

    readonly id = MYDSL_LANGUAGE_ID;
    readonly name = MYDSL_LANGUAGE_NAME;

    start(clientConnection: IConnection): void {
        const command = '/Users/dietrich/git/xtext-languageserver-example/vscode-extension-self-contained/src/mydsl/bin/mydsl-standalone';
        const args: string[] = [
        ];
        const serverConnection = this.createProcessStreamConnection(command, args);
        this.forward(clientConnection, serverConnection);
    }

    protected onDidFailSpawnProcess(error: Error): void {
        super.onDidFailSpawnProcess(error);
        console.error("Error starting mydsl language server.");
        console.error("Please make sure it is installed on your system.");
    }

}
