'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { actionFunction } from '@/utils/types';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  console.log('state', state);
  const { toast } = useToast();

  useEffect(() => {
    console.log('state useEffect', state);
    if (state && state.message) {
      toast({ description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
