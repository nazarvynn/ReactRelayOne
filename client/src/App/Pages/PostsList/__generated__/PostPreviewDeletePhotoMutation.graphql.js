/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PostPreviewDeletePhotoMutationVariables = {|
  id: string
|};
export type PostPreviewDeletePhotoMutationResponse = {|
  +deletePhoto: ?boolean
|};
export type PostPreviewDeletePhotoMutation = {|
  variables: PostPreviewDeletePhotoMutationVariables,
  response: PostPreviewDeletePhotoMutationResponse,
|};
*/


/*
mutation PostPreviewDeletePhotoMutation(
  $id: ID!
) {
  deletePhoto(id: $id)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ScalarField",
    "name": "deletePhoto",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostPreviewDeletePhotoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostPreviewDeletePhotoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ff99f4283a5f818aa70b47c54d6dad52",
    "id": null,
    "metadata": {},
    "name": "PostPreviewDeletePhotoMutation",
    "operationKind": "mutation",
    "text": "mutation PostPreviewDeletePhotoMutation(\n  $id: ID!\n) {\n  deletePhoto(id: $id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '919095bbbd2d523e894b3849d42e1f3c';

module.exports = node;
