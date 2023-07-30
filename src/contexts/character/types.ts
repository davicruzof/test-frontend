interface CharacterInfo {
  name: string;
  description: string;
  thumbnail: string;
}

export interface CharacterContextType {
  character: CharacterInfo;
  setCharacter: (value: CharacterInfo) => void;
}
