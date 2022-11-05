import React from "react";
import { TerminalText } from "./TerminalText";
import { Meta } from "@storybook/react";

export default {
  title: "TerminalText",
  component: TerminalText
} as Meta

export const Default = () => <TerminalText blinker>The quick brown fox jumps over the lazy dog.</TerminalText>
