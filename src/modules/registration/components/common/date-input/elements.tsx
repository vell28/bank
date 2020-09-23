import styled from 'styled-components';

import { FormGroup } from '../../redux-fields/elements';

export const Container = styled(FormGroup)<any>`
  .flatpickr-wrapper {
    width: 100%;

    .flatpickr-calendar {
      top: 64px;
      background-color: ${(props) => props.theme.colors.darkBlue2} !important;
      position: absolute;

      &:before {
        border-bottom-color: rgba(255, 255, 255, 0.07) !important;
      }

      &:after {
        border-bottom-color: rgba(255, 255, 255, 0.07) !important;
      }

      .flatpickr-month {
        color: ${(props) => props.theme.colors.white};
      }

      .flatpickr-prev-month {
        color: ${(props) => props.theme.colors.white} !important;
        fill: ${(props) => props.theme.colors.white} !important;
      }

      .nextMonthDay {
        opacity: 0.6;
      }

      .flatpickr-next-month {
        color: ${(props) => props.theme.colors.white} !important;
        fill: ${(props) => props.theme.colors.white} !important;
      }

      .arrowUp {
        &:after {
          border-bottom-color: ${(props) => props.theme.colors.white};
        }
      }

      .arrowDown {
        &:after {
          border-bottom-color: ${(props) => props.theme.colors.white};
          border-top-color: ${(props) => props.theme.colors.white};
        }
      }

      .flatpickr-day {
        color: ${(props) => props.theme.colors.white} !important;
      }

      .flatpickr-day:nth-child(7n + 6),
      .flatpickr-day:nth-child(7n + 7) {
        color: ${(props) => props.theme.colors.red} !important;
      }

      .prevMonthDay {
        color: ${(props) => props.theme.colors.gray} !important;
      }
    }
  }
`;

export const Icon = styled.div<any>`
  position: absolute;
  right: 18px;
  width: 18px;
  height: 100%;
  background: url(/img/calendar.svg) no-repeat center;
  cursor: pointer;
`;
