from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr


class AlbumRestrictionObject(SdkBaseModel):
    reason: Optional[ReasonOrStr] = UNSET
    """The reason for the restriction. Albums may be restricted if the content is not available in a given market, to
    the user's subscription type, or when the user's account is set to not play explicit content. Additional reasons may
    be added in the future."""


class AlbumRestrictionObjectDict(TypedDict):
    reason: NotRequired[ReasonOrStr]
