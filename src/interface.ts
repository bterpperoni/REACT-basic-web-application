import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type Structure = {
    structureId : number;
    data : string;
}

export type Children = {
    children : React.ReactNode;
}

export type ButtonProps = {
    href?: string;
    children: React.ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>;

export type DropdownProps = {
    label: string;
    class: string;
    selectedValue: number;
    onSelectedValueChange: (value: number) => void;
  };