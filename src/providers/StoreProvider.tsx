// "use client";
// import { AppStore, makeStore } from "@/redux/store";
// import React, { useRef } from "react";
// import { Provider } from "react-redux";

// const StoreProvider = ({ children }: { children: React.ReactNode }) => {
//   const storeRef = useRef<AppStore>(undefined);
//   if (!storeRef.current) {
//     // Create the store instance the first time this renders
//     storeRef.current = makeStore();
//   }
//   return <Provider store={storeRef.current}>{children}</Provider>;
// };

// export default StoreProvider;
"use client";

import { AppStore, makeStore } from "@/redux/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
