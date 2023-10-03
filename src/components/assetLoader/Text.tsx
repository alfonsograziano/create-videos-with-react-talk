import {FC} from 'react';
import {TextAssetSchemaRenderDescription} from '../../utils/renderDescriptionSchema';
import {useDynamicStyle} from '../../hooks/useDynamicStyle';

type TextProps = TextAssetSchemaRenderDescription & {
	dynamicStyle?: any;
};

export const Text: FC<TextProps> = ({dynamicStyle, ...props}) => {
	const currentFrameStyle = useDynamicStyle(dynamicStyle);
	return (
		<span style={{...props.style, ...currentFrameStyle}}>{props.text}</span>
	);
};
