//
//  NativeCounterViewManager.m
//  ShadertoyRN
//
//  Created by Dom Chiu on 9/12/24.
//

//#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(NativeCounterViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(onCountChanged, RCTDirectEventBlock)
RCT_EXTERN_METHOD(setInitialCount:(nonnull NSNumber *)node count:(nonnull NSNumber *)count)
@end

@interface RCT_EXTERN_MODULE(NativeCounterViewManagerBridge, NSObject)
@end
