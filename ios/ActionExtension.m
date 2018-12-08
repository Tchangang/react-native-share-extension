#import "ActionExtension.h"
#import "ShareViewController.h"

#define URL_IDENTIFIER @"public.url"

@implementation ActionExtension

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(done) {
  [shareViewController.extensionContext completeRequestReturningItems:nil completionHandler:nil];
}

RCT_REMAP_METHOD(getData,
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {

  NSExtensionItem *item = [shareViewController.extensionContext.inputItems firstObject];
  NSArray *attachments = item.attachments;

  __block NSMutableString *url;
  __block NSItemProvider *urlProvider = nil;

  [attachments enumerateObjectsUsingBlock:^(NSItemProvider *provider, NSUInteger idx, BOOL *stop) {
    if ([provider hasItemConformingToTypeIdentifier:URL_IDENTIFIER]) {
      urlProvider = provider;
      *stop = YES;
    }
  }];
  if (urlProvider) {
    [urlProvider loadItemForTypeIdentifier:URL_IDENTIFIER options:nil completionHandler:^(NSURL *urlFound, NSError *error) {
      if (error) {
        reject(@"error", error.description, nil);
      } else {
        //      url = [NSMutableString stringWithString: @"step 3"];
        url = [NSMutableString stringWithString: [urlFound absoluteString]];
        resolve(@{
                  @"url": url
        });
      }
    }];
  }
}
@end
