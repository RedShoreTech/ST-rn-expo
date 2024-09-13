// NativeCounterView.tsx
import React from 'react';
import { requireNativeComponent, ViewStyle, NativeModules, findNodeHandle } from 'react-native';

const NativeCounterViewComponent = requireNativeComponent('NativeCounterView');
const { NativeCounterViewManager } = NativeModules;

interface NativeCounterViewProps {
  style?: ViewStyle;
  initialCount?: number;
  onCountChanged?: (event: { nativeEvent: { count: number } }) => void;
}

export const NativeCounterView: React.FC<NativeCounterViewProps> = ({ style, initialCount = 0, onCountChanged }) => {
  const viewRef = React.useRef(null);

  React.useEffect(() => {
    if (viewRef.current) {
      const nodeHandle = findNodeHandle(viewRef.current);
      if (nodeHandle) {
        NativeCounterViewManager.setInitialCount(nodeHandle, initialCount);
      }
    }
  }, [initialCount]);

  return (
    <NativeCounterViewComponent
      ref={viewRef}
      style={style}
      onCountChanged={onCountChanged}
    />
  );
};
