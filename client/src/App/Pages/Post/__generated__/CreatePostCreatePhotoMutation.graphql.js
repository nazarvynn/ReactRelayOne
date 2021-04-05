/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePhotoInput = {|
  title: string,
  url: string,
  thumbnailUrl: string,
|};
export type CreatePostCreatePhotoMutationVariables = {|
  input: CreatePhotoInput
|};
export type CreatePostCreatePhotoMutationResponse = {|
  +createPhoto: ?{|
    +id: ?string,
    +title: ?string,
    +thumbnailUrl: ?string,
  |}
|};
export type CreatePostCreatePhotoMutation = {|
  variables: CreatePostCreatePhotoMutationVariables,
  response: CreatePostCreatePhotoMutationResponse,
|};
*/


/*
mutation CreatePostCreatePhotoMutation(
  $input: CreatePhotoInput!
) {
  createPhoto(input: $input) {
    id
    title
    thumbnailUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Photo",
    "kind": "LinkedField",
    "name": "createPhoto",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "thumbnailUrl",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreatePostCreatePhotoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreatePostCreatePhotoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4d9b3b9e724842e93da899f94ee94698",
    "id": null,
    "metadata": {},
    "name": "CreatePostCreatePhotoMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePostCreatePhotoMutation(\n  $input: CreatePhotoInput!\n) {\n  createPhoto(input: $input) {\n    id\n    title\n    thumbnailUrl\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c03f895850c06c1e2bf300b47a22c25';

module.exports = node;
