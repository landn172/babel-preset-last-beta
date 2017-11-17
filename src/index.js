import proposalOptionalCatchBind from '@babel/plugin-proposal-optional-catch-binding'
import proposalClassProperties from '@babel/plugin-proposal-class-properties'
import proposalDecorators from '@babel/plugin-proposal-decorators'
import proposalExportDefault from '@babel/plugin-proposal-export-default'
import proposalExportNamespace from '@babel/plugin-proposal-export-namespace'
import proposalFunctionSend from '@babel/plugin-proposal-function-sent'
import proposalNumericSeparator from '@babel/plugin-proposal-numeric-separator'
import proposalObjectRestSpread from '@babel/plugin-proposal-object-rest-spread'
import proposalOptionalChaining from '@babel/plugin-proposal-optional-chaining'
import proposalUnicoadPropertyRegex from '@babel/plugin-proposal-unicode-property-regex'
import syntaxDynamicImport from '@babel/plugin-syntax-dynamic-import'
import transformNewTarget from '@babel/plugin-transform-new-target'

export default function() {
  return {
    plugins: [
      proposalOptionalCatchBind,
      proposalClassProperties,
      proposalDecorators,
      proposalExportDefault,
      proposalExportNamespace,
      proposalFunctionSend,
      proposalNumericSeparator,
      proposalObjectRestSpread,
      proposalOptionalChaining,
      proposalUnicoadPropertyRegex,
      syntaxDynamicImport,
      transformNewTarget
    ]
  }
}
