/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { ContainerModule } from 'inversify';
import {
    CommandContribution,
    KeybindingContribution, KeybindingContext
} from "@theia/core/lib/common";
import { OpenHandler } from '@theia/core/lib/browser';
import { EditorManagerImpl, EditorManager } from './editor-manager';
import { EditorRegistry } from './editor-registry';
import { EditorCommandHandlers } from "./editor-command";
import { EditorKeybindingContribution, EditorKeybindingContext } from "./editor-keybinding";
import { bindEditorPreferences } from './editor-preferences';

export default new ContainerModule(bind => {
    bindEditorPreferences(bind);

    bind(EditorRegistry).toSelf().inSingletonScope();
    bind(EditorManager).to(EditorManagerImpl).inSingletonScope();
    bind(OpenHandler).toDynamicValue(context => context.container.get(EditorManager));

    bind(CommandContribution).to(EditorCommandHandlers);
    bind(EditorKeybindingContext).toSelf().inSingletonScope();
    bind(KeybindingContext).toDynamicValue(context => context.container.get(EditorKeybindingContext));
    bind(KeybindingContribution).to(EditorKeybindingContribution);
});
