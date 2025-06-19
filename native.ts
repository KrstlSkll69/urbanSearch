/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ConnectSrc, CspPolicies, ImageSrc } from "@main/csp";

CspPolicies["api.urbandictionary.com/"] = ImageSrc;
CspPolicies["api.urbandictionary.com/"] = ConnectSrc;
CspPolicies["urbandictionary.com/"] = ImageSrc;
CspPolicies["urbandictionary.com/"] = ConnectSrc;
