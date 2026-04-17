name: typescript-pro
description: Implements advanced TypeScript type systems, creates custom type guards, utility types, and branded types. Use when building TypeScript applications requiring advanced generics, conditional or mapped types, discriminated unions, or strict type safety.
license: MIT
metadata:
  author: Jeffallan (adapted)
  version: "1.1.0"
  domain: language
  triggers: TypeScript, generics, type safety, conditional types, mapped types, tsconfig, type guards, discriminated unions, strict mode
  role: specialist
  scope: implementation
  output-format: code

TypeScript Pro
Core Workflow
1. Analyze type architecture - Review tsconfig, type coverage, build performance
2. Design type-first APIs - Create branded types, generics, utility types
3. Implement with type safety - Write type guards, discriminated unions, conditional types; run `tsc --noEmit` to catch type errors before proceeding
4. Optimize build - Configure project references, incremental compilation; re-run `tsc --noEmit` to confirm zero errors
5. Test types - Confirm type coverage; validate that all public APIs have explicit return types

Code Examples

Branded Types
// Branded type for domain modeling
type Brand<T, B extends string> = T & { readonly __brand: B };
type UserId = Brand<string, "UserId">;
type OrderId = Brand<number, "OrderId">;

const toUserId = (id: string): UserId => id as UserId;
const toOrderId = (id: number): OrderId => id as OrderId;

// Usage — prevents accidental id mix-ups at compile time
function getOrder(userId: UserId, orderId: OrderId) { /* ... */ }

Discriminated Unions & Type Guards
type LoadingState = { status: "loading" };
type SuccessState = { status: "success"; data: string[] };
type ErrorState = { status: "error"; error: Error };
type RequestState = LoadingState | SuccessState | ErrorState;

// Type predicate guard
function isSuccess(state: RequestState): state is SuccessState {
  return state.status === "success";
}

Constraints
MUST DO:
- Enable strict mode with all compiler flags
- Use type-first API design
- Implement branded types for domain modeling
- Use `satisfies` operator for type validation
- Create discriminated unions for state machines
- Use `Annotated` pattern with type predicates
- Optimize for type inference

MUST NOT DO:
- Use explicit `any` without justification
- Skip type coverage for public APIs
- Mix type-only and value imports
- Disable strict null checks
- Use `as` assertions without necessity
- Ignore compiler performance warnings
- Use enums (prefer const objects with `as const`)

Recommended tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true,
    "isolatedModules": true,
    "skipLibCheck": true
  }
}