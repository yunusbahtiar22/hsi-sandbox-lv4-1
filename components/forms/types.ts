import { FormEvent } from "react";
export interface FormProps {
  name: string;
}

export type SubmitEventHandler<T> = (event: FormEvent<T>) => void;
