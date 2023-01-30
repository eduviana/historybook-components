/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
   * Este es el mensaje a mostrar en la etiqueta
   */
    label: string;
    /**
   * Este es el tamaño de la etiqueta
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
   * Capitalizar todo el texto
   */
    allCaps?: boolean;
    /**
   * Colores básicos del boton
   */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
   * Color de fuente personalizado
   */
    fontColor?: string;
    /**
   * Color de fondo
   */
    backgroundColor: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
