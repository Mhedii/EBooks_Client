import useFirebase from '@/hook/useFirebase';

import React, { ReactNode } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const allContext = useFirebase();
  return React.Children.map(children, (child: any) => {
    return React.cloneElement(child, { allContext });
  });
};

export default AuthProvider;
