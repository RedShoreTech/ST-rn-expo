//
//  NativeCounterViewManager.swift
//  ShadertoyRN
//
//  Created by Dom Chiu on 9/12/24.
//
import Foundation
import React

@objc(NativeCounterViewManager)
class NativeCounterViewManager: RCTViewManager {
  override func view() -> UIView! {
    return NativeCounterView()
  }

  @objc func setInitialCount(_ node: NSNumber, count: NSNumber)
  {
    DispatchQueue.main.async {
      if let view = self.bridge.uiManager.view(forReactTag: node) as? NativeCounterView {
        view.setInitialCount(count.intValue)
      }
    }
  }

  // 添加这个方法来设置 onCountChanged 回调
  @objc func setOnCountChanged(_ node: NSNumber, onCountChanged: @escaping RCTDirectEventBlock) {
    DispatchQueue.main.async {
      if let view = self.bridge.uiManager.view(forReactTag: node) as? NativeCounterView {
        view.onCountChanged = { count in
          onCountChanged(["count": count])
        }
      }
    }
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}

@objc(NativeCounterViewManagerBridge)
class NativeCounterViewManagerBridge: NSObject {
  @objc func constantsToExport() -> [String: Any]! {
    return [:]
  }

  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
