import React, { useState, useRef } from "react";
import { Text14 } from "styles/text";
import CheckBoxContainer from "components/CheckBox";
import useOutSideRef from "hooks/useOutSideRef";
import {
  DropDownContainer,
  DropDown,
  Arrow,
  Text,
  MenuBox,
  MenuWrapper,
  MenuItem,
} from "./style";

interface EnumMenusItem {
  id: number;
  name: string;
}
interface Props {
  content: {
    title: string;
    menus: EnumMenusItem[];
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  };
}
function DropBox({ content }: Props) {
  const { selected, clickRef, onToggle } = useOutSideRef();
  const { title, menus, onChange } = content;
  const dropDownBtnHandler = () => {
    onToggle();
  };

  return (
    <DropDownContainer>
      <DropDown
        selected={selected}
        fontNum={title.length}
        onClick={dropDownBtnHandler}
      >
        <Text selected={selected}>{title}</Text>
        <Arrow selected={selected} />
      </DropDown>
      {selected && (
        <div ref={clickRef}>
          <MenuBox>
            <MenuWrapper>
              {menus.map((menu) => (
                <MenuItem key={`${menu.id}-${menu.name}`}>
                  <input
                    type="checkbox"
                    value={menu.name}
                    onChange={onChange}
                  />
                  <Text14>{menu.name}</Text14>
                </MenuItem>
              ))}
            </MenuWrapper>
          </MenuBox>
        </div>
      )}
    </DropDownContainer>
  );
}

export default DropBox;
