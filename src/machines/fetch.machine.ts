import { assign, createMachine } from 'xstate';

export interface DataFetchMachineContext<TResponseData> {
  data?: TResponseData | undefined;
  errorMessage?: string | undefined;
}

export type DataFetchMachineEvent<TResponseData> =
  | {
      type: 'FETCH';
    }
  | {
      type: 'REFRESH';
    }
  | {
      type: 'RECEIVE_DATA';
      data: TResponseData;
    }
  | {
      type: 'ERROR';
    }
  | {
      type: 'CANCEL';
    };

export const dataMachine = <TResponseData extends { [key: string]: any }>(
  id: string,
) => {
  return;
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOlwgBswBiAJQFEAxBgZQAlFQAHAe1lwAuuHvk4gAHogDMAFgBMJAAwyAnCoBsUgBxbFcxVpUAaEAE9EcgIzqSAVkUO5W23IDsiy3LkBfbybRYeISk5FTUjPQAKgDCHEggvPxCImKSCLIKymqaOnoGxmYW6jJ2Dh62Up7Kzr7+GDgExCQAZmACDfhQ4VGxYomCwqLxaerKJK7qcjKuWlLKUnK2libmCF6WSq6WMuoq21Kjlio+fiABHU2t7UFd0QCCAHLR9AAyfXwDKcOI8rbjqmo9JoKjIpCtEBMbAC1K4ZsVLIopLUzvUgpc2h0ugxngBJABq9AA+gARO6RO7vJKDVLSUHjKYaHQyVSueTghBabYkaFaGS2LbM9TqZHnNGkK6Y6j0Wi0ADytEpnyGoDSGSUAJyun0hnZeyUZX0iJ0lksUhUvlO+B4EDgYlFjRClDAJCt9AATm6eG6XTxiegBOhFcllRJEKbXCR1J57ItdPyVLZ2fYI2UHAjKoYdCLUQ6yE6fe7Pd7sOhYH6A0Hqd8EOGk64-mpG1HFLYZKbhad7cE81QCx6vZWviqw6b2dopPq04cERMtNnArnQs6wP23ZBByG0gi5GODJO8iopPXJvOLo6qBuaQgZuy5FI-qnY8VlK4TnUF92JTdL9XbEsSNsahaOo-IVG4Wi3qymzbH+xzAdob4oh+xA-sOCCtuylhzhaQA */
  createMachine<
    DataFetchMachineContext<TResponseData>,
    DataFetchMachineEvent<TResponseData>
  >(
    {
      context: {},
      id: '(machine)',
      initial: 'idle',
      states: {
        idle: {
          initial: 'noError',
          states: {
            noError: {
              entry: 'clearErrorMessage',
              initial: 'noData',
              states: {
                noData: {},
                hasData: {},
              },
            },
            errored: {},
          },
          on: {
            REFRESH: {
              target: 'fetching',
            },
            FETCH: {
              cond: 'noData',
              target: 'fetching',
            },
          },
        },
        fetching: {
          invoke: {
            src: 'fetchData',
          },
          on: {
            FETCH: {
              target: 'fetching',
              internal: false,
            },
            CANCEL: {
              target: 'idle',
            },
            RECEIVE_DATA: {
              actions: 'assignDataToContext',
              target: '#(machine).idle.noError.hasData',
            },
            ERROR: {
              actions: 'assignErrorToContext',
              target: '#(machine).idle.errored',
            },
          },
        },
      },
    },
    {
      actions: {
        assignDataToContext: assign((_context, event) => {
          if (event.type !== 'RECEIVE_DATA') return {};
          return {
            data: event.data,
          };
        }),
        clearErrorMessage: assign((_ctx, _event) => {
          return {
            errorMessage: undefined,
          };
        }),
        assignErrorToContext: assign((_context, event: any) => {
          return {
            errorMessage: event.data?.message || 'An unknown error occurred',
          };
        }),
      },
      guards: {
        noData: (context, _event) => context.data === undefined,
      },
    },
  );
};
