//
//  ShareViewController.m
//  share
//
//  Created by Boris Tchangang on 08/12/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//
#import "ShareViewController.h"
#import "React/RCTBundleURLProvider.h"
#import <React/RCTRootView.h>

#define URL_IDENTIFIER @"public.url"

ShareViewController *shareViewController = nil;
NSExtensionContext *context;

@interface ShareViewController ()

@end

@implementation ShareViewController

- (void)viewDidLoad
{
  context = self.extensionContext;

  NSURL *jsCodeLocation;

  NSDictionary *initialProps = [NSDictionary dictionaryWithObjects:[NSArray arrayWithObjects:[NSNumber numberWithBool: TRUE], nil]
                                                           forKeys:[NSArray arrayWithObjects:@"shareExtension", nil]];

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"shareExtension"
                                               initialProperties:initialProps
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  self.view = rootView;
  shareViewController = self;
}

@end
