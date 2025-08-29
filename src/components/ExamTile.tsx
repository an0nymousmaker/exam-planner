import type { FC } from "react";
import type { Exam, Topic } from "../utils/types";

interface Props {
  examInfo: Exam;
  topicsInfo?: Topic[];
}

/**
 * @name    ExamTile
 *
 * @brief
 *
 * @note
 */
export const ExamTile: FC<Props> = ({ examInfo, topicsInfo }) => {
  const { id: examID } = examInfo;
  return <div></div>;
};
