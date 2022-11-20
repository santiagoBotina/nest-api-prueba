export const CREATE_TRANSACTION_DATA = {
  acceptance_token:
    'eyJhbGciOiJIUzI1NiJ9.eyJjb250cmFjdF9pZCI6MSwicGVybWFsaW5rIjoiaHR0cHM6Ly93b21waS5jby93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS9URVJNSU5PUy1ZLUNPTkRJQ0lPTkVTLURFLVVTTy1VU1VBUklPUy1XT01QSS5wZGYiLCJmaWxlX2hhc2giOiIzZGNkMGM5OGU3NGFhYjk3OTdjZmY3ODExNzMxZjc3YiIsImppdCI6IjE1ODU4NDE2MTUtNDU2MTgiLCJleHAiOjE1ODU4NDUyMTV9.bwBa-RjN3euycqeXVroLWwUN1ZRY1X11I4zn1y5nMiY',
  amount_in_cents: 3000000,
  currency: 'COP',
  customer_email: 'example@wompi.co',
  payment_method: {
    type: 'CARD',
    token: 'tok_prod_280_32326B334c47Ec49a516bf1785247ba2',
    installments: 2,
  },
  payment_source_id: 1234,
};
