export type Tool = {
    id: number;
    icon?: string;
    name?: string;
    color?: string;
    link?: string;
  };
  
  export type SearchBarProps = {
    onSearch: (searchTerm: string) => void;
  };

  export type ModalProps = {
    tool: Tool;
    onClose: () => void;
  };

  export type CardProps = {
    tool: {
      id: number;
      icon?: string;
      name?: string;
      color?: string;
    };
  };

  export type HomeProps = {};