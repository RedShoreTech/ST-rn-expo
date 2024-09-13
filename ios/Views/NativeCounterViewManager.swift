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
