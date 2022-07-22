import React, {
  createContext, ReactNode, FC, useState, SetStateAction, Dispatch,
} from 'react';
import Popup from 'components/Popup';

interface PopupState {
  isActive: boolean,
  onClose: (...args: any[]) => any,
  orientation: string,
  title: string,
  url: string,
}

export interface PopupContext {
  popup: PopupState,
  setPopup: Dispatch<SetStateAction<PopupState>>
}

interface PopupContextProps {
  children: ReactNode
}

const popupContextValues = {
  popup: {
    isActive: false,
    onClose: () => {},
    orientation: 'landscape',
    title: '',
    url: '',
  },
  setPopup: () => {},
};

export const PopupContext = createContext<PopupContext>(popupContextValues);

export const PopupProvider: FC<PopupContextProps> = ({
  children,
}) => {
  const [popup, setPopup] = useState(popupContextValues.popup);
  return (
    <PopupContext.Provider value={{ popup, setPopup }}>
      {children}
      <Popup
        isActive={popup.isActive}
        onClose={popup.onClose}
        title={popup.title}
        url={popup.url}
        orientation={popup.orientation}
      />
    </PopupContext.Provider>
  );
};
