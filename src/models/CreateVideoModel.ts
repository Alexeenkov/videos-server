import {VideoQualityEnum} from "../constants/enum";export interface CreateVideoModel {    title: string    author: string    availableResolutions: VideoQualityEnum[]}