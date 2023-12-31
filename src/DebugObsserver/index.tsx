import { useRecoilSnapshot } from "recoil";
import { useEffect } from "react";

export default function DebugObserver() {
    const snapshot = useRecoilSnapshot();
    useEffect(() => {
      console.debug('The following atoms were modified:');
      for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
        console.debug(node.key, snapshot.getLoadable(node));
      }
    }, [snapshot]);
  
    return null;
  }