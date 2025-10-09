export interface AccordionItemType {
  id: string;
  title: string;
  children?: React.ReactNode;
  content?: any;
  onToggle?: any;
  isOpen?: boolean;
}

export interface AccordionStandAloneType {
  title: string;
  children: React.ReactNode;
}

export interface AccordionType {
  accordionsItems: AccordionItemType[];
}
