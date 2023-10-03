import {FC} from 'react';
import {CSSAssetSchemaRenderDescription} from '../../utils/renderDescriptionSchema';
import {useDynamicStyle} from '../../hooks/useDynamicStyle';

type CSSContainerProps = CSSAssetSchemaRenderDescription & {
	dynamicStyle?: any;
};

export const CSSContainer: FC<CSSContainerProps> = ({
	dynamicStyle,
	...props
}) => {
	const currentFrameStyle = useDynamicStyle(dynamicStyle);
	return <div style={{...props.style, ...currentFrameStyle}} />;
};
