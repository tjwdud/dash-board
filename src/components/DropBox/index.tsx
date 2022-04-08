import React from "react";
import { Text14 } from "styles/text";
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
    dropState: string[];
    setDropState: React.Dispatch<React.SetStateAction<string[]>>;
  };
}
function DropBox({ content }: Props) {
  const { selected, clickRef, onToggle } = useOutSideRef();

  const { title, menus, dropState, setDropState } = content;

  const dropDownBtnHandler = () => {
    onToggle();
  };

  const checkHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, checked } = event.target as HTMLInputElement;
    if (checked) {
      setDropState([...dropState, name]);
      return;
    }
    setDropState(dropState.filter((option) => option !== name));
  };

  return (
    <DropDownContainer>
      <DropDown
        selected={selected}
        fontNum={title.length}
        onClick={() => dropDownBtnHandler()}
      >
        <Text selected={selected}>
          {title}
          {dropState.length > 0 && `(${dropState.length})`}
        </Text>
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
                    name={menu.name}
                    onChange={checkHandler}
                    checked={dropState.includes(menu.name)}
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
