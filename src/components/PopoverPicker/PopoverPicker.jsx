import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

import useClickOutside from "./useClickOutside";
import { Picker,Swatch,Popover } from "./PopoverPickerStyle";

export const PopoverPicker = ({ color, onChange }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <Picker>
      <Swatch
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <Popover ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
        </Popover>
      )}
    </Picker>
  );
};
